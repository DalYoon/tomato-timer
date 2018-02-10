import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";


_timeFormmat = (time) => {
    let minites = Math.floor(time / 60);
    time -= minites * 60;
    let seconds = parseInt(time % 60, 10);
    const parsedTime = `${minites < 10 ? `0${minites}`:`${minites}`}:${seconds < 10 ? `0${seconds}`:`${seconds}`}`;
    return parsedTime;
}

class Timer extends Component {

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if(!currentProps.isPlaying && nextProps.isPlaying){
        const timerInterval = setInterval(
            () => { currentProps.addSecond(); }, 1000);
        this.setState({timerInterval});
    } else if(currentProps.isPlaying && !nextProps.isPlaying) {
        clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const { 
        isPlaying, 
        elapcedTime, 
        timerDuration,
        startTimer,
        restartTimer,
        addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{ _timeFormmat(timerDuration - elapcedTime) }</Text>
        </View>
        <View style={styles.lower}>
            {!isPlaying && 
                <Button iconName="play-circle" onPress={startTimer} />
            }
            {isPlaying && 
                <Button iconName="stop-circle" onPress={restartTimer} />
            }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#213656"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    fontSize: 120,
    fontWeight: "100",
    color: "white"
  }
});

export default Timer;
