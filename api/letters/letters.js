import instance from "../instance";
export default {
  list: (skip) => {
    return instance.get(`/letters/${skip}`);
  },
  save: (formData) => {
    return instance.post("/letter", formData);
  },
  update: (letterId, data) => {
    return instance.put(`/letter/${letterId}`, data);
  },
  delete: (id) => {
    return instance.delete(`/letter/${id}`, {});
  },
  upload: (letterId, formData ) => {
    return instance.post(`/upload-image-letter/${letterId}`, formData);
  },
  getImage: (name) => {
    return instance.get(`/get-image-letter/${name}`);
  },
  search: (query) => {
    return instance.get(`/search-letter/${query}`);
  },
};
