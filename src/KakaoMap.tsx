import React, { useEffect, useRef, useState } from "react";

const KakaoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null); // 지도를 표시할 div의 레퍼런스
  const [map, setMap] = useState<any>(null); // 지도 객체를 상태로 저장
  const [level, setLevel] = useState<number>(3); // 현재 지도 레벨을 상태로 저장

  useEffect(() => {
    // Kakao Maps API가 로드된 후에 실행
    if (window.kakao && mapContainer.current) {
      const options = {
        center: new window.kakao.maps.LatLng(37.374474020920864, 126.63361466845616), // 중심 좌표 설정
        level: 3, // 확대 레벨 설정
      };
      
      const kakaoMap = new window.kakao.maps.Map(mapContainer.current, options); // 지도 생성
      setMap(kakaoMap); // 지도 객체 상태 저장

      displayLevel(kakaoMap); // 초기 레벨 표시
    }
  }, []);

  const zoomIn = () => {
    if (map) {
      const currentLevel = map.getLevel();
      map.setLevel(currentLevel - 1);
      setLevel(map.getLevel()); // 지도 레벨 상태 업데이트
    }
  };

  const zoomOut = () => {
    if (map) {
      const currentLevel = map.getLevel();
      map.setLevel(currentLevel + 1);
      setLevel(map.getLevel()); // 지도 레벨 상태 업데이트
    }
  };

  const displayLevel = (kakaoMap: any) => {
    setLevel(kakaoMap.getLevel());
  };

  return (
    <div>
      <div
        ref={mapContainer}
        style={{ width: "500px", height: "400px" }}
      ></div>
      <p>
        <button onClick={zoomIn}>지도레벨 - 1</button>
        <button onClick={zoomOut}>지도레벨 + 1</button>
        <span>현재 지도 레벨은 {level} 레벨 입니다.</span>
      </p>
    </div>
  );
};

export default KakaoMap;
