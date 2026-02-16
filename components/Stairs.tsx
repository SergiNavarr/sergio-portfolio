import {motion} from 'framer-motion';

//variants
const stairAnimation = {
    initial:{
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index : number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

export default function Stairs() {
  return (
    <>
        {/* render 6 motion divs, each representing a stair */}
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                className="w-full h-full bg-white relative"
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
            />
        );
    })}
    </>
  );
}