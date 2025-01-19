import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nest'

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)

    const User = mongoose.connection.collection('users')
    const Trainer = mongoose.connection.collection('trainers')
    const Exercise = mongoose.connection.collection('exercises')
    const UserWorkout = mongoose.connection.collection('userWorkouts')

    await User.deleteMany({})
    await Trainer.deleteMany({})
    await Exercise.deleteMany({})
    await UserWorkout.deleteMany({})

    const users = [
      {
        id: 'user1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 18,
        goal: 'Gain muscle mass',
      },
      {
        id: 'user2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 33,
        goal: 'To lose weight',
      },
      {
        id: 'user3',
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        age: 24,
        goal: 'Hypertrophy',
      },
    ]

    const trainers = [
      {
        id: 'trainer1',
        name: 'Trainer One',
        email: 'trainer1@example.com',
        users: ['user1', 'user2', 'user3'],
      },
      {
        id: 'trainer2',
        name: 'Trainer Two',
        email: 'trainer2@example.com',
        users: ['user3'],
      },
    ]

    const exercises = [
      {
        id: 'exercise1',
        name: 'Leg Press',
      },
      {
        id: 'exercise2',
        name: 'Barbell Squats',
      },
      {
        id: 'exercise3',
        name: 'Hip Thrust',
      },
      {
        id: 'exercise4',
        name: 'Bench Press',
      },
      {
        id: 'exercise5',
        name: 'Deadlift',
      },
      {
        id: 'exercise6',
        name: 'Bicep Curls',
      },
      {
        id: 'exercise7',
        name: 'Glute Bridge',
      },
      {
        id: 'exercise8',
        name: 'Plank ',
      },
      {
        id: 'exercise9',
        name: 'Running on Treadmill',
      },
      {
        id: 'exercise10',
        name: 'Kettlebell Swings',
      },
    ]

    const userWorkouts = [
      {
        id: 'userWorkout1',
        userId: 'user1',
        trainerId: 'trainer1',
        workouts: [
          {
            exerciseId: 'exercise1',
            repetitions: 12,
            weight: 100,
            steps: 4,
          },
          {
            exerciseId: 'exercise2',
            repetitions: 10,
            weight: 80,
            steps: 3,
          },
        ],
      },
      {
        id: 'userWorkout2',
        userId: 'user2',
        trainerId: 'trainer1',
        workouts: [
          {
            exerciseId: 'exercise2',
            repetitions: 10,
            weight: 60,
            steps: 5,
          },
          {
            exerciseId: 'exercise5',
            repetitions: 8,
            weight: 90,
            steps: 4,
          },
        ],
      },
    ]

    await User.insertMany(users)
    await Trainer.insertMany(trainers)
    await Exercise.insertMany(exercises)
    await UserWorkout.insertMany(userWorkouts)

    console.log('Seed completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error executing seed:', error)
    process.exit(1)
  }
}

seedDatabase()
