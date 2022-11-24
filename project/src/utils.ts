import dayjs from 'dayjs';

const formatDateTime = (date: dayjs.ConfigType, format: string) => dayjs(date).format(format);

export { formatDateTime };
