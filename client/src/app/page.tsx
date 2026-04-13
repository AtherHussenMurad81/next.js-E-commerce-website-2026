import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-3/1 mb-3">
        <Image src={"/featured.png"} alt="Featured Products" fill></Image>
      </div>
    </div>
  );
};

export default Homepage;
