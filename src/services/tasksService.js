import { privateAPI } from '../shared/http';

export const getTaskAllApi = async () => {
  const { data } = await privateAPI.get('api/tasks');
  return data;
};

export const getTaskByIdApi = async id => {
  const { data } = await privateAPI.get(`api/tasks/${id}`);
  return data;
};

export const addTaskApi = async dataTask => {
  const { data } = await privateAPI.post('api/tasks', dataTask);
  return data;
};

export const updateTaskByIdApi = async id => {
  const { data } = await privateAPI.put(`api/tasks/${id}`);
  return data;
};

export const updateTaskStatusApi = async id => {
  const { data } = await privateAPI.patch(`api/tasks/${id}/status`);
  return data;
};

export const updateTaskPriorityApi = async id => {
  const { data } = await privateAPI.patch(`api/tasks/${id}/priority`);
  return data;
};

export const deleteTaskApi = async id => {
  const { data } = await privateAPI.delete(`api/tasks/${id}`);
  return data;
};
