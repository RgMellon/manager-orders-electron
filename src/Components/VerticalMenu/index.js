import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ListMenu, BadgeQttOrder } from './styles';
import {
  FaFileAlt,
  FaNewspaper,
  FaSignOutAlt,
  FaYoutube,
} from 'react-icons/fa';

import history from '../../services/history';
import audio from '../../auxiliar/audio';

import { signOut } from '../../store/modules/auth/actions';

import socketio from 'socket.io-client';

import { getOrders } from '../../store/modules/orders/actions';

import { toast } from 'react-toastify';

export default function VerticalMenu() {
  const profile = useSelector(state => state.user.profile);
  const { orders } = useSelector(state => state.orders);

  const qttPendingOrders = useMemo(() => {
    const pendingOrders = orders.filter(item => item.status === 4);
    return pendingOrders.length;
  }, [orders]);

  const dispatch = useDispatch();

  const socket = useMemo(() => {
    if (profile) {
      return socketio('https://socketward.uaufi.com/', {
        query: {
          loja_login_id: profile.id,
          loja_id: profile.loja_id,
          app_env: 'testing',
        },
      });
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      socket.on('orders.refresh', order => {
        try {
          audio.play();
          let myNotification = new Notification('NOVO PEDIDO!', {
            body: 'Você possui um novo Pedido',
            icon:
              'data:image/png;base64,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',
          });

          myNotification.onclick = () => {
            console.log('Notification clicked');
          };

          dispatch(getOrders());
        } catch (e) {
          toast.error('Novo Pedido');
        }
      });
    }
  }, [dispatch, profile, socket]);

  function handleRedirect(path) {
    history.push(path);
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ListMenu>
        <li
          onClick={() => {
            handleRedirect('/dashboard');
          }}
        >
          {qttPendingOrders > 0 && (
            <BadgeQttOrder> {qttPendingOrders} </BadgeQttOrder>
          )}
          <FaFileAlt size={20} color="#fff" />
          <p> Pedidos </p>
        </li>

        <li
          onClick={() => {
            handleRedirect('/news');
          }}
        >
          <FaYoutube size={20} color="#fff" />
          <p> Tutoriais </p>
        </li>

        <button onClick={handleLogout}>
          <FaSignOutAlt size={20} color="#fff" />
          <p> Sair </p>
        </button>
      </ListMenu>
    </Container>
  );
}
