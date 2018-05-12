import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser} from '../actions';

// C6
class LoginForm extends Component{
    static navigationOptions = {
        title: "LoginForm"
      };

    // M6.1
    onEmailChange(text){
    this.props.emailChanged(text);
    }

    // M6.2
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    // M6.3
    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    // M6.4
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                    {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    // M6.5
    renderButton(){
        var { navigate } = this.props.navigation;
        if(this.props.loading == "outside"){
            return(
                <Spinner size="large" />
            );
        }
        else if(this.props.loading == "inside"){
            navigate("Home");
            return(
            <Button onPress={() => navigate("Home")}>
                  Return Home
            </Button>
            );
        }
        else if(this.props.loading == "display"){
            return(
            <Button onPress={this.onButtonPress.bind(this)}>
                  Login
            </Button>
            );
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                     />
                </CardSection>


                <CardSection>
                    <Input
                    label="Password"
                    password={true}
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    secureTextEntry={true}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
const mapStateToProps = ({auth}) => {
    const {email, password, error, loading } = auth;
    return {email,password,error,loading};
};


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
