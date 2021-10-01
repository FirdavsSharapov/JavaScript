public class boolean LinearSearch(int[] array, int leght, int element) {
    if ( (array == null  || leght == 0))
    {
        return false;
    }
    for (int i =  0; i <leght; i++){
        if (array[i] == element){
            return true;
        }
    }
    return false;
}
