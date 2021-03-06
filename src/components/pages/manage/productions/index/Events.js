import { useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { List } from '@/ui/List';
import { getStackProps, Stack, stackPropTypes } from '@/ui/Stack';
import { Title } from '@/ui/Title';
import { CheckboxWithLabel } from '@/ui/CheckboxWithLabel';
import { Button, ButtonVariants } from '@/ui/Button';
import { Icon, Icons } from '@/ui/Icon';
import { Breakpoints, getValueFromTheme } from '@/ui/theme';
import { Panel } from '@/ui/Panel';
import { getInlineProps, Inline, inlinePropTypes } from '@/ui/Inline';
import { Spinner } from '@/ui/Spinner';
import { Alert, AlertVariants } from '@/ui/Alert';
import { Input } from '@/ui/Input';
import { DetailTable } from '@/ui/DetailTable';
import { parseSpacing } from '@/ui/Box';
import { Text } from '@/ui/Text';

import { useGetCalendarSummary } from '@/hooks/api/events';
import { useMatchBreakpoint } from '@/hooks/useMatchBreakpoint';
import { CalendarType } from '@/constants/CalendarType';

const getValue = getValueFromTheme('eventItem');

const Event = ({
  id,
  name,
  terms,
  location,
  calendarType,
  onToggle,
  selected,
  className,
}) => {
  const { i18n, t } = useTranslation();
  const { data: period } = useGetCalendarSummary({
    id,
    locale: i18n?.language ?? '',
    format: calendarType === CalendarType.SINGLE ? 'lg' : 'sm',
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickToggleExpand = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  const type = useMemo(() => {
    const typeId = terms.find((term) => term.domain === 'eventtype')?.id ?? '';
    // The custom keySeparator was necessary because the ids contain '.' which i18n uses as default keySeparator
    return t(`offerTypes*${typeId}`, { keySeparator: '*' });
  }, [terms]);

  return (
    <List.Item
      key={id}
      paddingLeft={4}
      paddingRight={4}
      paddingBottom={3}
      paddingTop={3}
      backgroundColor="white"
      className={className}
    >
      <Stack as="div" flex={1} spacing={3}>
        <Inline as="div" justifyContent="space-between">
          <CheckboxWithLabel
            id={id}
            name={name}
            onToggle={() => onToggle(id)}
            checked={selected}
          >
            {name}
          </CheckboxWithLabel>
          <Button
            onClick={handleClickToggleExpand}
            variant={ButtonVariants.UNSTYLED}
          >
            <Icon
              name={isExpanded ? Icons.CHEVRON_DOWN : Icons.CHEVRON_RIGHT}
            />
          </Button>
        </Inline>
        {isExpanded && (
          <DetailTable
            items={[
              { header: t('productions.event.type'), value: type },
              { header: t('productions.event.when'), value: period },
              { header: t('productions.event.where'), value: location },
            ]}
          />
        )}
      </Stack>
    </List.Item>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  terms: PropTypes.array,
  location: PropTypes.string,
  calendarType: PropTypes.string,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  className: PropTypes.string,
};

const Actions = ({
  activeProductionName,
  onClickAdd,
  onClickDelete,
  shouldDisableDeleteButton,
  loading,
}) => {
  const { t } = useTranslation();
  const shouldCollapse = useMatchBreakpoint(Breakpoints.S);

  return (
    <Inline as="div" justifyContent="space-between" alignItems="center">
      <Title>
        {t('productions.overview.events_in_production', {
          productionName: activeProductionName,
        })}
      </Title>
      <Inline as="div" spacing={3}>
        <Button
          iconName={Icons.PLUS}
          spacing={3}
          maxHeight={parseSpacing(5)()}
          onClick={onClickAdd}
          shouldHideText={shouldCollapse}
          disabled={loading}
        >
          {t('productions.overview.create')}
        </Button>
        <Button
          disabled={shouldDisableDeleteButton || loading}
          variant={ButtonVariants.DANGER}
          iconName={Icons.TRASH}
          spacing={3}
          onClick={onClickDelete}
          maxHeight={parseSpacing(5)()}
          shouldHideText={shouldCollapse}
        >
          {t('productions.overview.delete')}
        </Button>
      </Inline>
    </Inline>
  );
};

Actions.propTypes = {
  loading: PropTypes.bool,
  activeProductionName: PropTypes.string,
  onClickAdd: PropTypes.func,
  onClickDelete: PropTypes.func,
  shouldDisableDeleteButton: PropTypes.bool,
};

const AddAction = ({
  onAdd,
  onCancel,
  className,
  toBeAddedEventId,
  onToBeAddedEventIdInput,
  ...props
}) => {
  const { t } = useTranslation();
  const shouldCollapse = useMatchBreakpoint(Breakpoints.S);

  return (
    <Inline
      as="div"
      className={className}
      spacing={3}
      alignItems="center"
      {...getInlineProps(props)}
    >
      <Input
        id="cdbid"
        placeholder="cdbid"
        maxWidth="22rem"
        value={toBeAddedEventId}
        onInput={(event) =>
          onToBeAddedEventIdInput(event.currentTarget.value.trim())
        }
      />
      <Button
        iconName={Icons.CHECK}
        spacing={3}
        disabled={!toBeAddedEventId}
        onClick={() => onAdd(toBeAddedEventId)}
        shouldHideText={shouldCollapse}
      >
        {t('productions.overview.confirm')}
      </Button>
      <Button
        variant={ButtonVariants.SECONDARY}
        iconName={Icons.TIMES}
        spacing={3}
        onClick={onCancel}
        shouldHideText={shouldCollapse}
      >
        {t('productions.overview.cancel')}
      </Button>
    </Inline>
  );
};

AddAction.propTypes = {
  ...inlinePropTypes,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  onToBeAddedEventIdInput: PropTypes.func,
  toBeAddedEventId: PropTypes.string,
};

const Events = ({
  events,
  activeProductionName,
  loading,
  errorMessage,
  onToggleSelectEvent,
  onAddEvent,
  onCancelAddEvent,
  onDismissError,
  className,
  onClickAdd,
  onClickDelete,
  isAddActionVisible,
  toBeAddedEventId,
  onToBeAddedEventIdInput,
  ...props
}) => {
  const { i18n, t } = useTranslation();

  const shouldDisableDeleteButton = !(
    events.filter((event) => event.selected).length > 0
  );

  return (
    <Stack spacing={4} {...getStackProps(props)}>
      <Stack key="title-and-buttons" spacing={3}>
        {isAddActionVisible ? (
          <Stack as="div" spacing={3}>
            <AddAction
              onAdd={onAddEvent}
              onCancel={onCancelAddEvent}
              toBeAddedEventId={toBeAddedEventId}
              onToBeAddedEventIdInput={onToBeAddedEventIdInput}
            />
            <Alert
              visible={!!errorMessage}
              variant={AlertVariants.WARNING}
              dismissible
              onDismiss={onDismissError}
            >
              {errorMessage}
            </Alert>
          </Stack>
        ) : (
          <Actions
            loading={loading}
            activeProductionName={activeProductionName}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
            shouldDisableDeleteButton={shouldDisableDeleteButton}
          />
        )}
      </Stack>
      {loading ? (
        <Spinner marginTop={4} />
      ) : events.length === 0 ? (
        <Text> {t('productions.overview.no_events')}</Text>
      ) : (
        <Panel key="panel">
          <List>
            {events.map((event, index) => (
              <Event
                key={event.id}
                id={event.id}
                name={
                  event.name?.[i18n.language] ??
                  event.name?.[event.mainLanguage]
                }
                terms={event.terms}
                location={
                  event.location?.name?.[i18n.language] ??
                  event.location?.name?.[event.location?.mainLanguage]
                }
                calendarType={event.calendarType}
                onToggle={onToggleSelectEvent}
                selected={event.selected}
                css={
                  index !== events.length - 1
                    ? (props) => {
                        return `border-bottom: 1px solid ${getValue(
                          'borderColor',
                        )(props)};`;
                      }
                    : undefined
                }
              />
            ))}
          </List>
        </Panel>
      )}
    </Stack>
  );
};

Events.propTypes = {
  ...stackPropTypes,
  events: PropTypes.array,
  activeProductionName: PropTypes.string,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  onToggleSelectEvent: PropTypes.func,
  selectedIds: PropTypes.array,
  onClickDelete: PropTypes.func,
  onClickAdd: PropTypes.func,
  onAddEvent: PropTypes.func,
  onInputSearchTerm: PropTypes.func,
  onDismissError: PropTypes.func,
  onToBeAddedEventIdInput: PropTypes.func,
  toBeAddedEventId: PropTypes.string,
  isAddActionVisible: PropTypes.bool,
  className: PropTypes.string,
};

Events.defaultProps = {
  events: [],
  loading: false,
};

export { Events };
