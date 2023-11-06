const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find();
      res.status(200).json(thoughtData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Get single thought
  async getThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thoughtData) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Create thought
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);

      const userData = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thoughtData._id } },
        { runValidators: true, new: true }
      );

      res.status(200).json({ thoughtData, userData });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Update thought
  async updateThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Delete thought
  async deleteThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thoughtData) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json({
        message: 'Thought & associated reactions successfully deleted',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Create reaction
  async createReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Delete reaction
  async deleteReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'Check thought and reaction ID' });
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
