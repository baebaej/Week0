import React, { useEffect, useRef } from "react";

const KakaoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null); // 지도를 표시할 div의 레퍼런스

  useEffect(() => {
    // Kakao Maps API가 로드된 후에 실행
    if (window.kakao && mapContainer.current) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 중심 좌표 설정
        level: 3, // 확대 레벨 설정
      };
      
      const map = new window.kakao.maps.Map(mapContainer.current, options); // 지도 생성
    }
  }, []);

  return <div ref={mapContainer} style={{ width: "500px", height: "400px" }}></div>;
};

export default KakaoMap;
