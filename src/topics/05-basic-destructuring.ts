
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Feel good inc",
    details: {
        author: "gorillaz",
        year: 2005
    }
}

const { 
    song: anotherSong, 
    songDuration: duration,
    details: { author, year } // this is an object
} = audioPlayer;

// const { author, year } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Year: ', year);


export {};