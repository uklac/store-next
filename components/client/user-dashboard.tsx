'use client';

import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useRouter } from 'next/navigation';
import { useUser } from 'store/hooks/user-hook';

export async function UserDashboard() {
  const route = useRouter();
  const { _logout, _getAddressesUser } = useUser();

  const address = await _getAddressesUser();

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
                      {/* <AccountSummary/> */}
                      <p>No order has been made yet.</p>
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
                              {address.data && address.data?.map((item, index) => (
                                <p key={index}>
                                  {item.name}
                                  <br />
                                  {item.company}
                                  <br />
                                  {item.address1}
                                  <br />
                                  {item.address2}
                                  <br />
                                  {item.phone}
                                  <br />
                                  {item.country.name}
                                  <br />
                                  {item.city}
                                  <br />
                                  {item.zipcode}
                                  <br />
                                  <Link href="/">
                                    Edit <i className="icon-edit"></i>
                                  </Link>
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Shipping Address</h3>
                              <p>
                                You have not set up this type of address yet.
                                <br />
                                <Link href="/">
                                  Edit <i className="icon-edit"></i>
                                </Link>
                              </p>
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
