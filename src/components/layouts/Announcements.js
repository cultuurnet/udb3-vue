import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, parseSpacing } from '@/ui/Box';
import { Button } from '@/ui/Button';
import { Icon, Icons } from '@/ui/Icon';
import { Image } from '@/ui/Image';
import { Inline } from '@/ui/Inline';
import { Link } from '@/ui/Link';
import { List } from '@/ui/List';
import { Modal } from '@/ui/Modal';
import { Stack } from '@/ui/Stack';
import { getValueFromTheme } from '@/ui/theme';
import { Title } from '@/ui/Title';
import { Text } from '@/ui/Text';

const AnnouncementStatus = {
  ACTIVE: 'active',
  SEEN: 'seen',
  UNSEEN: 'unseen',
};

const getValueForAnnouncement = getValueFromTheme('announcement');
const getValueForAnnouncementList = getValueFromTheme('announcementList');
const getValueForAnnouncementContent = getValueFromTheme('announcementContent');

const Announcement = ({ id, title, status, onClick }) => {
  return (
    <List.Item
      padding={4}
      spacing={3}
      backgroundColor={{
        default:
          status === AnnouncementStatus.ACTIVE
            ? getValueForAnnouncement('selected.backgroundColor')
            : 'inherit',
        hover:
          status === AnnouncementStatus.ACTIVE
            ? getValueForAnnouncement('selected.hoverBackgroundColor')
            : getValueForAnnouncement('hoverBackgroundColor'),
      }}
      cursor="pointer"
      css={`
        border-bottom: ${getValueForAnnouncement('borderColor')} 1px solid;
      `}
      onClick={() => {
        onClick(id);
      }}
    >
      {status === AnnouncementStatus.UNSEEN ? (
        <Icon name={Icons.EYE} />
      ) : (
        <Icon name={Icons.EYE_SLASH} />
      )}
      <Box
        as="span"
        css={`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
      >
        {title}
      </Box>
    </List.Item>
  );
};

Announcement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(AnnouncementStatus)),
  onClick: PropTypes.func,
};

Announcement.defaultProps = {
  status: AnnouncementStatus.UNSEEN,
};

const AnnouncementContent = ({
  title,
  imageSrc,
  body,
  callToAction,
  callToActionLabel,
}) => (
  <Stack as="article" padding={4} spacing={3} width="70%">
    <Title>{title}</Title>
    {!!imageSrc && (
      <Link href={callToAction}>
        <Image
          src={imageSrc}
          alt={callToActionLabel}
          width="100%"
          maxHeight="30vh"
          opacity={{ hover: 0.85 }}
        />
      </Link>
    )}

    <Box
      forwardedAs="div"
      dangerouslySetInnerHTML={{ __html: body }}
      css={`
        strong {
          font-weight: bold;
        }

        a {
          color: ${getValueForAnnouncementContent('linkColor')};
        }

        p {
          margin-bottom: ${parseSpacing(4)};
        }

        ol {
          list-style-type: decimal;
          margin-bottom: ${parseSpacing(4)};

          li {
            margin-left: ${parseSpacing(5)};
          }
        }
        ul {
          list-style-type: disc;
          margin-bottom: ${parseSpacing(4)};

          li {
            margin-left: ${parseSpacing(5)};
          }
        }
      `}
    />
    <Inline as="div" justifyContent="flex-end">
      {!!callToAction && (
        <Link href={callToAction}>
          <Button>
            <Text>{callToActionLabel}</Text>
          </Button>
        </Link>
      )}
    </Inline>
  </Stack>
);

AnnouncementContent.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  body: PropTypes.node,
  callToAction: PropTypes.string,
  callToActionLabel: PropTypes.string,
};

const Announcements = ({
  visible,
  announcements,
  onClickAnnouncement,
  onShow,
  onClose,
}) => {
  const { t } = useTranslation();

  const activeAnnouncement = announcements.find(
    (announcement) => announcement.status === AnnouncementStatus.ACTIVE,
  );

  return (
    <Modal
      visible={visible}
      title={t('announcements.new_features')}
      onShow={onShow}
      onClose={onClose}
    >
      {announcements.length > 0 ? (
        <Inline>
          <List
            width="30%"
            css={`
              border-right: ${getValueForAnnouncementList('borderColor')} 1px
                solid;
              overflow-y: auto;
            `}
          >
            {announcements.map((announcement) => {
              return (
                <Announcement
                  key={announcement.uid}
                  id={announcement.uid}
                  title={announcement.title}
                  status={announcement.status}
                  onClick={() => {
                    onClickAnnouncement(announcement);
                  }}
                />
              );
            })}
          </List>
          {activeAnnouncement && (
            <AnnouncementContent
              key={activeAnnouncement.uid}
              title={activeAnnouncement.title}
              imageSrc={activeAnnouncement.image}
              body={activeAnnouncement.body}
              callToAction={activeAnnouncement.callToAction}
              callToActionLabel={activeAnnouncement.callToActionLabel}
            />
          )}
        </Inline>
      ) : (
        <Text as="p" padding={4}>
          {t('announcements.no_features')}
        </Text>
      )}
    </Modal>
  );
};

Announcements.propTypes = {
  visible: PropTypes.bool,
  announcements: PropTypes.array,
  onClickAnnouncement: PropTypes.func,
  onShow: PropTypes.func,
  onClose: PropTypes.func,
};

Announcements.defaultProps = {
  visible: false,
  setAnnouncements: () => {},
  onShow: () => {},
  onClose: () => {},
};

export { Announcements, AnnouncementStatus };
