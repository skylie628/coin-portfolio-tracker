import { RandomReveal } from "react-random-reveal";
import { Text } from "@chakra-ui/react";
export default function RandomRevealText({
  hover,
  setHover,
  characters,
  className,
}) {
  const onComplete = () => {
    setHover((prev) => false);
    return { shouldRepeat: true, delay: 0 };
  };
  return (
    <div className={className}>
      {hover ? (
        <RandomReveal
          isPlaying={hover}
          duration={0.5}
          revealDuration={1}
          characters={characters}
          onComplete={onComplete}
        />
      ) : (
        <Text>{characters}</Text>
      )}
    </div>
  );
}
