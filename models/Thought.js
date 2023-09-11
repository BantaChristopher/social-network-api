const { Schema, model } = require('mongoose'); 
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                const time = date.toLocaleTimeString();
                const day = date.toDateString();
                return `${time} on ${day}`;
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

// virtual to get number of reactions for a thought
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought; 