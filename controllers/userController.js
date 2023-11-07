const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const userData = await User.find()
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' });

      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Get one user
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' });

      if (!userData) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Create user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Update user
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Delete user
  async deleteUser(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.userId });
      if (!userData) {
        res.status(404).json({ message: 'No user with that ID' });
      }
      await Thought.deleteMany({ _id: { $in: userData.thoughts } });
      res.status(200).json({
        message: 'User and associated thoughts and reactions deleted!',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Add friend
  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!userData) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Delete friend
  async deleteFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!userData) {
        res.status(404).json({ message: 'Check user and friend ID' });
      }

      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
