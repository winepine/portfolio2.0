import { motion, useCycle } from "framer-motion";
import { Text, Image, Box, useColorModeValue } from "@chakra-ui/react";
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionBox = motion(Box);
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
    <MotionBox
      mx={{ base: "5px", lg: "20px" }}
      my="10px"
      w={{ base: "6rem", lg: "10rem" }}
      onHoverEnd={() => Cycle(false)}
      onHoverStart={() => Cycle(true)}
      onClick={() => Cycle(false)}
    >
      <MotionImage
        src={imgUrl}
        borderRadius="50%"
        animate="animate"
        variants={ImgAnim}
      ></MotionImage>
      <MotionText
        textAlign="center"
        opacity={0}
        mt={3}
        fontWeight={{ base: "200", lg: "100" }}
        fontSize={{ base: "xs", lg: "xl" }}
        animate="animate"
        variants={TextAnim}
        color={useColorModeValue(
          "rgba(0, 0, 0, 0.9)",
          "rgba(255, 255, 255, 0.9)"
        )}
      >
        {text}
      </MotionText>
    </MotionBox>
  );
};
export default HoverBox;
