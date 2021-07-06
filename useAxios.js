import "./styles.css";
import defaultAxios from "axios";
import { useEffect, useState } from "react";

// axios => http Request

const useAxios = (opts, axiosInstance = defaultAxios) => {
  // axios => (automatic to set header) == customizing
  // 위는 axiosInstance를 얻고자 하고, 실패할경우 defaultAxios를 가져온다.
  const [state, setState] = useState({
    loading: true,
    data: null,
  });
  const [tirgger, setTirgger] = useState(0);
  const refetch = () => {
    // refetch를 위한 함수,
    setState({
      // setState는 현재 state를 그대로 가져온다.
      // refetch 함수의 이유가 state의 변경이 아닌,
      // trigger 변수의 변경을 통한 useEffect의 재실행이기 때문이다.
      ...state,
      loading: true,
    });
    setTirgger(Date.now());
    // tirgger 값을 랜덤변수를 통해 변경한다.
  };

  if (!opts.url) {
    // 입력받은 opts가 url이 없다면 return 한다.
    return;
  }
  useEffect(() => {
    //componentDidMount일 때 axiosInstance.then을 실행한다.
    axiosInstance(opts)
      .then((data) => {
        // 그러면 setState로 get한 정보를 받아온다.
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        //에러
        set({ ...state, loading: false });
      });
  }, [tirgger]);
  return { ...state, refetch };
};

export default useAxios;
