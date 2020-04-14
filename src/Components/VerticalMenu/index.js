import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ListMenu, BadgeQttOrder } from './styles';
import { FaFileAlt, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';

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
          let myNotification = new Notification('NOVO AGENDAMENTO!', {
            body: 'Você possui um novo agendamento',
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
          <FaNewspaper size={20} color="#fff" />
          <p> Novidades </p>
        </li>

        <button onClick={handleLogout}>
          <FaSignOutAlt size={20} color="#fff" />
          <p> Sair </p>
        </button>
      </ListMenu>
    </Container>
  );
}
