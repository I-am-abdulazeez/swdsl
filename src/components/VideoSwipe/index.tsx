import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShayoVideos } from "src/data";

const VideoSwipe = (): JSX.Element => {
  return (
    <Box mt="4rem">
      <Swiper
        effect="fade"
        autoplay={{
          delay: 25000,
        }}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {ShayoVideos.map(({ videoId, videoUrl }) => (
          <SwiperSlide key={videoId}>
            <video
              autoPlay
              style={{
                maxWidth: "100%",
                height: "100%",
                width: "100%",
              }}
              preload="auto"
              controls
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
