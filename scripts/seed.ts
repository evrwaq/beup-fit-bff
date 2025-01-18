import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nest'

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)

    const User = mongoose.connection.collection('users')
    const Trainer = mongoose.connection.collection('trainers')
    const Workout = mongoose.connection.collection('workouts')
    const UserWorkout = mongoose.connection.collection('userWorkouts')

    await User.deleteMany({})
    await Trainer.deleteMany({})
    await Workout.deleteMany({})
    await UserWorkout.deleteMany({})

    const users = [
      { id: 'user1', name: 'John Doe', email: 'john@example.com' },
      { id: 'user2', name: 'Jane Smith', email: 'jane@example.com' },
    ]

    const trainers = [
      {
        id: 'trainer1',
        name: 'Trainer One',
        email: 'trainer1@example.com',
        users: ['user1', 'user2'],
      },
    ]

    const workouts = [
      {
        id: 'workout1',
        name: 'Leg Day',
        description: 'Squats and lunges',
        target: ['legs'],
      },
      {
        id: 'workout2',
        name: 'Arm Day',
        description: 'Bicep curls and tricep dips',
        target: ['arms'],
      },
    ]

    const userWorkouts = [
      {
        id: 'userWorkout1',
        userId: 'user1',
        trainerId: 'trainer1',
        workouts: ['workout1', 'workout2'],
      },
      {
        id: 'userWorkout2',
        userId: 'user2',
        trainerId: 'trainer1',
        workouts: ['workout2'],
      },
    ]

    await User.insertMany(users)
    await Trainer.insertMany(trainers)
    await Workout.insertMany(workouts)
    await UserWorkout.insertMany(userWorkouts)

    console.log('Seed completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error executing seed:', error)
    process.exit(1)
  }
}

seedDatabase()
