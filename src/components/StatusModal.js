import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalVariants } from '@/ui/Modal';
import { Stack } from '@/ui/Stack';
import { ReasonAndTypeForm } from '@/components/ReasonAndTypeForm';
import { OfferType } from '@/constants/OfferType';
import { Spinner } from '@/ui/Spinner';

const StatusModal = ({ visible, loading, className, onClose, onConfirm }) => {
  const { t } = useTranslation();

  const [type, setType] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    if (!visible) {
      setType('');
      setReason('');
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      title={t('offerStatus.changeStatus')}
      variant={ModalVariants.QUESTION}
      size="xl"
      className={className}
      confirmTitle={t('offerStatus.actions.save')}
      cancelTitle={t('offerStatus.actions.close')}
      onConfirm={() => onConfirm(type, reason)}
      onClose={onClose}
      confirmButtonDisabled={!type || reason.length > 200 || loading}
    >
      {loading ? (
        <Spinner marginY={4} />
      ) : (
        <Stack padding={4}>
          <ReasonAndTypeForm
            offerType={OfferType.EVENT}
            statusType={type}
            statusReason={reason}
            onChangeStatusType={(e) => setType(e.target.value)}
            onInputStatusReason={(e) => setReason(e.target.value)}
          />
        </Stack>
      )}
    </Modal>
  );
};

StatusModal.propTypes = {
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

export { StatusModal };
