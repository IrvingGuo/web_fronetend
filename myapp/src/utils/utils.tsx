

export async function getList(getFunc: (options?: Record<string, any>) => Promise<API.Result>) {
  try {
    const msg = await getFunc();
    if (msg.success) {
      return msg.data == null ? [] : msg.data;
    } else {
      console.error(msg.errorMessage);
    }
  } catch {
    console.log('fail to get object list for func: ', getFunc.name);
    return [];
  }
}