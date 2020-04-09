import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, NextButton, CancelButton } from './styles';
import { toast } from 'react-toastify';

import api from '../../services/api';
import {
  getOrders,
  clearOrderDetail,
} from '../../store/modules/orders/actions';

export default function StatusBottomBar() {
  const { order } = useSelector(state => state.orders.orderDetail);
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState(order.next_status);
  const [currentStatus, setCurrentStatus] = useState(order.next_status);
  const [colorButtonByStatus, setColorButtonByStatus] = useState({
    4: '#6b38e6',
    5: '#009c98',
    7: 'rgb(11, 127, 194)',
  });

  useEffect(() => {
    setButtonText(order.next_status);

    const getCurrentStatus = order.status[order.status.length - 1];
    setCurrentStatus(getCurrentStatus.status);
  }, [order]);

  async function handleNextStatus() {
    try {
      const response = await api.put(
        `/api/ward/orders/${order.id}/next/status`
      );

      dispatch(getOrders());
      const { next_status, status } = response.data.order;

      // console.tron.log(next_status);

      setButtonText(next_status);
      setCurrentStatus(status);

      if (currentStatus === 7) {
        dispatch(clearOrderDetail());
      }

      // new Notification('Pedido mudou de status', {
      //   body: 'Você mudou o status do pedido ',
      // });
      toast.success('Pedido mudou de status');
    } catch (e) {
      toast.error('Ops, ocorreu um erro ao avançar os Status');
    }
  }

  async function handleCancel() {
    try {
      await api.delete(`/api/ward/orders/${order.id}/cancel`);
      dispatch(getOrders());
      dispatch(clearOrderDetail());
      toast.success('Pedido mudou de status');
    } catch (e) {
      toast.error('Ops, ocorreu um erro ao cancelar pedido');
    }
  }

  return (
    <Container>
      {currentStatus === 4 && (
        <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
      )}

      {buttonText && (
        <NextButton
          bkg={colorButtonByStatus[currentStatus]}
          onClick={handleNextStatus}
        >
          {buttonText}
        </NextButton>
      )}
    </Container>
  );
}
