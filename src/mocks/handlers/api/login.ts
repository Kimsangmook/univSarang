import { http,delay,HttpResponse } from "msw";


// NOTE : 로그인 API
const login: Parameters<typeof http.get>[1] = async ({request,params,cookies}
) => {
  await delay(1000);
  return HttpResponse.json(['mook']);
};

// NOTE : GBS 리스트 API
const gbsList: Parameters<typeof http.get>[1] = async ({request,params,cookies}
  ) => {
    await delay(2000);
    return HttpResponse.json(['kang','min']);
  };
  

export const appApiHandlers = [
    /**
     * 로그인 api
     * response: {
     *
     *  data
     * }
     */
    http.get("/mock/login", login),
    /**
     */
    // rest.post("/mock/steps/5", gbsList),

  ];
