import request from "@/service/request";

// 扫码
export function getFileOpen(params) {
  return request({
    url: `/api/test`,
    method: "get",
    params,
  });
}
