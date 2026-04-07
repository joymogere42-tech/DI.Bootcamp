// 🌟 Video Class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// 🌟 Create 2 instances
const video1 = new Video("JavaScript Basics", "Joy", 300);
const video2 = new Video("OOP in JS", "Sam", 600);

console.log("Exercise Output:");
video1.watch();
video2.watch();


// 🌟 Bonus: Array of 5 videos
const videoData = [
  ["HTML Tutorial", "Alice", 200],
  ["CSS Guide", "Bob", 400],
  ["React Intro", "Charlie", 500],
  ["NodeJS Crash Course", "David", 700],
  ["Python Basics", "Eve", 350]
];

// Loop and create instances
console.log("\nBonus Output:");
videoData.forEach(data => {
  const video = new Video(data[0], data[1], data[2]);
  video.watch();
});