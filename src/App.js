import React, { Component } from "react";
import { Header, Footer } from "./Components/Layouts/index";
import Exercises from "./Components/Exercises/index";
import { muscles, exercises } from "../src/store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreated = exercise => {
    debugger;
    console.log(exercise);
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    //console.log(this.getExercisesByMuscles());
    debugger;
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    //console.log("value of the category in the App module is :" + category);
    return (
      <div>
        <Header
          muscles={muscles}
          onExerciseCreated={this.handleExerciseCreated}
        />
        <Exercises
          category={category}
          exercises={exercises}
          exercise={exercise}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          onSelect={this.handleCategorySelected}
          muscles={muscles}
        />
      </div>
    );
  }
}

export default App;
