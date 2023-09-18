const { get } = require("../models/Reaction");

const usernames = [
    "LuckyDuck123",
    "RainbowGamer",
    "CoffeeLover87",
    "StarJumper",
    "MoonlightDreamer",
    "SunnySideUp",
    "PixelPainter",
    "MountainHiker",
    "ChocoChipCookie",
    "ElectricNinja",
    "SilverFox22",
    "CaptainAdventure",
    "RubyRedRose",
    "CosmicTraveler",
    "MidnightOwl",
    "PandaPaws",
    "GuitarGuru99",
    "WildflowerChild",
    "OceanExplorer",
    "TigerEyes",
    "JazzPianist",
    "DragonRider42",
    "SkyWatcher",
    "SunsetSailor",
    "SnowboarderX",
    "TechWhiz",
    "SoccerStar18",
    "AquaMermaid",
    "FluffyKitten",
    "BookWorm22",
    "GalacticSurfer",
    "ChocolateNinja",
    "HappyCamper",
    "GoldenSnitch",
    "ArtisticSoul",
    "BikeAdventurer",
    "MysticMoon",
    "PizzaLover77",
    "UnicornWhisperer",
    "AdventureSeeker",
    "StarryNightSky",
    "CoffeeBeanie",
    "ForestWalker",
    "EagleEye",
    "DancingFirefly",
    "GamingGeek",
    "SunnySmiles",
    "CaptainCuddles",
    "SongbirdMelody"
];

const thoughtTextOptions = [
    "Chasing dreams and making memories!",
    "Embracing the journey one step at a time.",
    "Sunsets and good vibes. 🌅✨",
    "Exploring new horizons and loving every moment.",
    "Coffee and contemplation.",
    "Dancing through life like nobody's watching.",
    "Finding joy in the little things.",
    "Sundays are for relaxation and recharge. 😌🌞",
    "In a world full of trends, be a classic.",
    "Spreading positivity and smiles!",
    "Adventure awaits... who's coming with me?",
    "Getting lost in a good book today. 📚✨",
    "Taking risks and learning from every experience.",
    "When life gives you lemons, make some lemonade!",
    "Appreciating the beauty of nature.",
    "Making memories with some incredible people.",
    "Pushing my limits and setting new goals.",
    "Diving into a creative journey today. 🎨🖋️",
    "Wandering, exploring, and living life to the fullest.",
    "Reflecting on the past, embracing the present, and dreaming about the future.",
    "Laughing in the face of Monday blues. 😄💪",
    "Surrounding myself with good energy and positive vibes.",
    "Capturing moments that take my breath away.",
    "Celebrating the simple joys of life.",
    "Learning, growing, and evolving.",
    "Life's too short to say no to dessert! 🍰🍨",
    "Reminiscing about the good old days.",
    "Taking a digital detox and enjoying the offline moments.",
    "Channeling my inner peace and zen.",
    "Finding beauty in every corner of the world.",
    "Enjoying the company of friends and family.",
    "Trying out a new recipe in the kitchen today. 🍳👩‍🍳",
    "Spreading kindness like confetti!",
    "Savoring the moments that make my heart skip a beat.",
    "Embracing change with open arms.",
    "Dream big, work hard, stay focused.",
    "Taking a moment to appreciate all the blessings.",
    "Loving fiercely and living fearlessly.",
    "Creating my own sunshine on cloudy days.",
    "Lost in wanderlust and adventure.",
    "Late-night thoughts and contemplations.",
    "Documenting life's chapters, one post at a time.",
    "Daring to be different and embracing uniqueness.",
    "Puppy cuddles and unconditional love. 🐶💕",
    "Striving for progress, not perfection.",
    "A little positivity can go a long way. Spread it!",
    "Rediscovering old passions and hobbies.",
    "Stepping out of my comfort zone and into the extraordinary.",
];

const reactionOptions = [
    'like',
    'love',
    'haha',
    'wow',
    'sad',
    'angry'
]; 

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => {
    const username = getRandomArrItem(usernames)
    const user = {
        username: username,
        email: `${username}@gmail.com`
    }
    return user;
};

const getRandomThought = () => {
    const thought = {
        thoughtText: getRandomArrItem(thoughtTextOptions),
        username: getRandomArrItem(usernames),
        reactions: [...getThoughtReactions(3)],
    }

    return thought;
}

const getThoughtReactions = (int) => {
    let results = []
    for(let i = 0; i<int; i++){
        results.push({
            reactionBody: getRandomArrItem(reactionOptions),
            username: getRandomArrItem(usernames)
        });
    }
    return results; 
}

module.exports = { getRandomUser, getRandomThought }