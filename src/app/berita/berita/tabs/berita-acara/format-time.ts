export const formatTimeDifference = (createdTime:any, currentTime:any) => {
    const differenceInMillis = currentTime - createdTime;

    const differenceInSeconds = Math.floor(differenceInMillis / 1000);

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const minutes = differenceInMinutes % 60;

    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const hours = differenceInHours % 24;

    const differenceInDays = Math.floor(differenceInHours / 24);

    if (differenceInDays <= 0) {
        if (hours <= 0) {
            if (minutes <= 0) {
                return `1 Menit`;
            }
            return `${minutes} Menit`;
        }
        return `${hours} Jam`;
    }

    return `${differenceInDays} Hari`;
}