import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useChangeSubEvents } from '../../hooks/api/events';
import { formatPeriod } from '../../utils/formatPeriod';
import { parseOfferId } from '../../utils/parseOfferId';
import { Alert } from '../publiq-ui/Alert';
import { Page } from '../publiq-ui/Page';
import { SelectionTable } from '../publiq-ui/SelectionTable';
import { Stack } from '../publiq-ui/Stack';
import { Text } from '../publiq-ui/Text';
import { getValueFromTheme } from '../publiq-ui/theme';
import { StatusModal } from './StatusModal';
import { OfferStatus } from './constants';
import { QueryStatus } from '../../hooks/api/authenticated-query';

const getValue = getValueFromTheme('statusPage');

const Status = ({ type, reason }) => {
  const { i18n } = useTranslation();
  return (
    <Stack>
      <Text>{type}</Text>
      {!!reason?.[i18n.language] && (
        <Text color={getValue('infoTextColor')}>{reason[i18n.language]}</Text>
      )}
    </Stack>
  );
};

Status.propTypes = {
  type: PropTypes.string.isRequired,
  reason: PropTypes.string,
};

const StatusPageMultiple = ({ event, refetchEvent }) => {
  const { t, i18n } = useTranslation();

  const eventId = parseOfferId(event['@id']);
  const name =
    event?.name?.[i18n.language] ?? event?.name?.[event.mainLanguage];
  const subEvents = event?.subEvent;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTimeStamps, setSelectedTimeStamps] = useState([]);

  const selectedSubEventIds = useMemo(
    () => selectedTimeStamps.map((timeStamp) => timeStamp.index),
    [selectedTimeStamps],
  );

  const handleSuccess = async () => {
    await refetchEvent();
    setIsModalVisible(false);
  };

  const {
    mutate: changeSubEvents,
    ...changeSubEventsMutation
  } = useChangeSubEvents({
    onSuccess: handleSuccess,
  });

  const handleConfirmChangeStatus = async (type, reason) => {
    await changeSubEvents({
      eventId,
      subEventIds: selectedSubEventIds,
      type,
      reason:
        reason.length > 0 && type !== OfferStatus.AVAILABLE
          ? {
              [i18n.language]: reason,
            }
          : undefined,
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: t('offerStatus.period'),
        accessor: 'period',
      },
      {
        Header: t('offerStatus.statusLabel'),
        accessor: 'status',
      },
    ],
    [],
  );

  const data = useMemo(
    () =>
      subEvents.map((subEvent) => ({
        period: formatPeriod(
          subEvent.startDate,
          subEvent.endDate,
          i18n.language,
          t,
        ),
        status: (
          <Status type={subEvent.status.type} reason={subEvent.status.reason} />
        ),
      })),
    [subEvents],
  );

  return [
    <Page key="page">
      <Page.Title>{t('offerStatus.title', { name })}</Page.Title>
      <Page.Content spacing={5}>
        <Alert>{t('offerStatus.info')}</Alert>
        <SelectionTable
          columns={columns}
          data={data}
          onSelectionChanged={setSelectedTimeStamps}
          actions={[
            {
              title: t('offerStatus.changeStatus'),
              onClick: () => setIsModalVisible(true),
              disabled: selectedTimeStamps.length === 0,
            },
          ]}
        />
      </Page.Content>
    </Page>,
    <StatusModal
      key="modal"
      visible={isModalVisible}
      loading={changeSubEventsMutation.status === QueryStatus.LOADING}
      onConfirm={handleConfirmChangeStatus}
      onClose={() => setIsModalVisible(false)}
    />,
  ];
};

StatusPageMultiple.propTypes = {
  event: PropTypes.object.isRequired,
};

export { StatusPageMultiple };
