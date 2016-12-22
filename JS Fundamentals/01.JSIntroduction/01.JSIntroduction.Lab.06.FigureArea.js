/**
 * Created by LittleKolio on 9/23/2016.
 */
function figureArea([w, h, W, H]) {
    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)]
    let area = s1 + s2 - s3;
    console.log(area);
}