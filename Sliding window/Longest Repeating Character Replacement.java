class Solution {
    public int characterReplacement(String s, int k) {
        int l=0,r=0,ans=0;
        int n= s.length();
        HashMap<Character, Integer> map = new HashMap<>();
        for(r=0;r<n;r++){
            map.put(s.charAt(r),map.get(s.charAt(r))+1);
            

        }
    }
}