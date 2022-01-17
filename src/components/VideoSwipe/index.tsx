import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShayoVideos } from "src/data";
import { SVideos } from "src/interfaces";

const VideoSwipe = (): JSX.Element => {
  return (
    <Box mt="4rem">
      <Swiper
        effect="fade"
        autoplay={{
          disableOnInteraction: true,
          delay: 43000,
        }}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {ShayoVideos.map(({ videoId, videoUrl }: SVideos) => (
          <SwiperSlide key={videoId}>
            <video
              autoPlay
              style={{
                maxWidth: "100%",
                height: "100%",
                width: "100%",
              }}
              preload="auto"
            >
              <source src={videoUrl} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default VideoSwipe;
