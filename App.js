import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene ,Drawer, ActionConst} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/Ionicons";

import SignUp from './components/SignUp';
import Main from './components/Main';
import Login from './components/Login'; 
import Reminder from './components/Reminder';
import Ricoh from './components/Ricoh';
import Try from './components/Try';
import Category from './components/Category';
 
type Props = {};
export default class App extends Component<Props> {



  render() {
    return (
      <Router>
      <Scene key="root">
          
        <Drawer
          key="drawer"
          contentComponent={Main}
          type={ActionConst.RESET}
          drawerWidth={350}
          hideNavBar
          styles={styles.drawer}
          drawerIcon={
              ()=><Icon
                    name="md-reorder"
                    color="#000000"
                    size={25}
                  />
                  
            }
          >

            <Scene key="tabbar" tabs={true} showLabel={false} tabBarStyle={{ backgroundColor: '#FFFFFF' }} title="tabber_101">

              <Scene key="Category"
                component={Category}
                title="Category"
                icon={
                        ()=><Icon
                              name="md-contacts"
                              color="#000000"
                              size={25}
                            />
                            
                      }
              />

              <Scene key="Reminder"
                component={Reminder}
                title="Reminder"
                hideNavBar={true}
                icon={
                        ()=><Icon
                              name="md-alarm"
                              color="#000000"
                              size={25}
                            />
                            
                      }
              />
              <Scene key="Login"
                component={Login}
                title="Login"
                 icon={
                        ()=><Icon
                              name="md-at"
                              color="#000000"
                              size={25}
                            />
                            
                      }
              />
              <Scene key="Try"
                component={Try}
                title="Try"
                icon={
                        ()=><Icon
                              name="md-contact"
                              color="#000000"
                              size={25}
                            />
                            
                      }
              /> 
            </Scene>    
          </Drawer>
      </Scene>
      </Router>

      /*<View style={styles.container}>
        <Category/>
      </View>*/
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
        shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 1
    },
});

