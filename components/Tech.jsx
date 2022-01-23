import { motion, useCycle } from "framer-motion";
import { Text, Image } from "@chakra-ui/react";
const MotionText = motion(Text);
const MotionImage = motion(Image);
const HoverBox = ({ text, imgUrl }) => {
  const [scale, cycleScale] = useCycle(0.3, 1.3);
  const [opa, cycleOpa] = useCycle(0, 1);
  const [rot, cycleRot] = useCycle(0, 360);
  const [y, cycleY] = useCycle(-50, 0);
  const ImgAnim = {
    animate: {
      transform: `rotate(${rot}deg)`,
      transition: {
        duration: 0.5,
      },
    },
  };
  const TextAnim = {
    animate: {
      opacity: opa,
      scale: scale,
      y: y,
    },
  };
  const Cycle = (args) => {
    args && cycleRot();
    cycleScale();
    cycleOpa();
    cycleY();
  };
  return (
    <motion.div
      style={{
        width: "10rem",
        padding: "1rem",
      }}
      onHoverEnd={() => Cycle(false)}
      onHoverStart={() => Cycle(true)}
    >
      <MotionImage
        src={imgUrl}
        w={150}
        borderRadius="50%"
        animate="animate"
        variants={ImgAnim}
      ></MotionImage>
      <MotionText
        textAlign="center"
        opacity={0}
        mt={3}
        fontWeight={100}
        fontSize="xl"
        animate="animate"
        variants={TextAnim}
        color="rgba(0,0,0,0.9)"
      >
        {text}
      </MotionText>
    </motion.div>
  );
};
export default HoverBox;
