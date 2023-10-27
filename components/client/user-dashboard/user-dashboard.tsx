'use client';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useRouter } from 'next/navigation';
import { useUser } from 'store/hooks/user-hook';
import { AccountSummary } from 'components/server/account-summary/account-summary';
import { useEffect, useState } from 'react';
import { UserOrder } from 'store/slices/user-slice';
import styles from './user-dashboard.module.scss';

export async function UserDashboard() {
  const route = useRouter();
  const { _logout, _getUserOrders, currentUser } = useUser();
  const [orders, setOrders] = useState<UserOrder | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await _getUserOrders();
      setOrders(ordersData);
    };

    fetchData();
  }, [_getUserOrders]);

  async function logout() {
    const { success, error } = await _logout();
    if (success) {
      route.push('/');
    } else {
      console.log('e: ', error);
    }
  }

  return (
    <div className="page-content">
      <div className="dashboard">
        <div className="container">
          <ul
            className="nav nav-dashboard flex-column mb-3 mb-md-0"
            role="tablist"
          >
            <Tabs selectedTabClassName="active show">
              <div className="row">
                <aside className="col-md-4 col-lg-3 mb-md-0 mb-2">
                  <TabList>
                    <Tab className="nav-item">
                      <span className="nav-link">Dashboard</span>
                    </Tab>

                    <Tab className="nav-item">
                      <span className="nav-link">Orders</span>
                    </Tab>

                    <Tab className="nav-item">
                      <span className="nav-link">Downloads</span>
                    </Tab>

                    <Tab className="nav-item">
                      <span className="nav-link">Addresses</span>
                    </Tab>

                    <Tab className="nav-item">
                      <span className="nav-link">Account Details</span>
                    </Tab>

                    <Tab className="nav-item">
                      <button className="nav-link" onClick={logout}>
                        Cerrar Session
                      </button>
                    </Tab>
                  </TabList>
                </aside>

                <div
                  className="col-md-8 col-lg-9"
                  style={{ marginTop: '1rem' }}
                >
                  <div className="tab-pane">
                    <TabPanel>
                      <p>hello</p>
                    </TabPanel>

                    <TabPanel>
                      {orders &&
                      orders.data?.orders !== undefined &&
                      orders.data.orders.length > 0 ? (
                        <AccountSummary orders={orders.data?.orders} />
                      ) : (
                        <p>No order has been made yet.</p>
                      )}
                    </TabPanel>

                    <TabPanel>
                      <p>No downloads available yet.</p>
                    </TabPanel>

                    <TabPanel>
                      <p>
                        The following addresses will be used on the checkout
                        page by default.
                      </p>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Billing Address</h3>
                              {currentUser && currentUser.bill_address && (
                                <div
                                  className={`${styles['address-information']}`}
                                >
                                  <div>
                                    <p>Nombre: </p>
                                    <p>Dirección 1: </p>
                                    <p>Dirección 2: </p>
                                    <p>Teléfono: </p>
                                    <p>País: </p>
                                    <p>Ciudad: </p>
                                    <p>Código Postal: </p>
                                  </div>
                                  <div>
                                    <p>{currentUser.bill_address.name}</p>
                                    <p>{currentUser.bill_address.address1}</p>
                                    <p>{currentUser.bill_address.address2}</p>
                                    <p>{currentUser.bill_address.phone}</p>
                                    <p>
                                      {currentUser.bill_address.country.name}
                                    </p>
                                    <p>{currentUser.bill_address.city}</p>
                                    <p>{currentUser.bill_address.zipcode}</p>
                                  </div>
                                </div>
                              )}
                              {/* <Link href="/">
                                Edit <i className="icon-edit"></i>
                              </Link> */}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Shipping Address</h3>
                              {currentUser && currentUser.ship_address && (
                                <div
                                  className={`${styles['address-information']}`}
                                >
                                  <div>
                                    <p>Nombre: </p>
                                    <p>Dirección 1: </p>
                                    <p>Dirección 2: </p>
                                    <p>Teléfono: </p>
                                    <p>País: </p>
                                    <p>Ciudad: </p>
                                    <p>Código Postal: </p>
                                  </div>
                                  <div>
                                    <p>{currentUser.ship_address.name}</p>
                                    <p>{currentUser.ship_address.address1}</p>
                                    <p>{currentUser.ship_address.address2}</p>
                                    <p>{currentUser.ship_address.phone}</p>
                                    <p>
                                      {currentUser.ship_address.country.name}
                                    </p>
                                    <p>{currentUser.ship_address.city}</p>
                                    <p>{currentUser.ship_address.zipcode}</p>
                                  </div>
                                </div>
                              )}
                              {/* <Link href="/">
                                Edit <i className="icon-edit"></i>
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <form action="#">
                        <div className="row">
                          <div className="col-sm-6">
                            <label>First Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-sm-6">
                            <label>Last Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                        <label>Display Name *</label>
                        <input type="text" className="form-control" required />
                        <small className="form-text">
                          This will be how your name will be displayed in the
                          account section and in reviews
                        </small>

                        <label>Email address *</label>
                        <input type="email" className="form-control" required />

                        <label>
                          Current password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>
                          New password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>Confirm new password</label>
                        <input type="password" className="form-control mb-2" />

                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SAVE CHANGES</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <div></div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </Tabs>
          </ul>
        </div>
      </div>
    </div>
  );
}
