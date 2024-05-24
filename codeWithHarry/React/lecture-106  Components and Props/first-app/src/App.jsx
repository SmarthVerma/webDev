import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {

  return (
    <>
      <Navbar />
      <div className="cards flex gap-3 justify-center m-12">
        <Card
          title="Hey there"
          url="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
          disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit id excepturi quos doloribus est laboriosam fuga tempore facilis nesciunt odio dolorum exercitationem, rem incidunt minima accusantium voluptatem pariatur cum."
        />
        <Card
          title="Hey there"
          url="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit id excepturi quos doloribus est laboriosam fuga tempore facilis nesciunt odio dolorum exercitationem, rem incidunt minima accusantium voluptatem pariatur cum."
        />
        <Card
          title="Hey there"
          url="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
          disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit id excepturi quos doloribus est laboriosam fuga tempore facilis nesciunt odio dolorum exercitationem, rem incidunt minima accusantium voluptatem pariatur cum."
        />
        <Card
          title="Hey there"
          url="https://preview.redd.it/i-made-a-tool-to-feed-an-endless-number-of-random-prompts-v0-nh4uui25ri6a1.png?width=512&format=png&auto=webp&s=7593faffae20b6178eb0ea6eb16ca9a71b98234f"
          disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit id excepturi quos doloribus est laboriosam fuga tempore facilis nesciunt odio dolorum exercitationem, rem incidunt minima accusantium voluptatem pariatur cum."
        />
      </div>
      <Footer />
    </>
  );
}
export default App
