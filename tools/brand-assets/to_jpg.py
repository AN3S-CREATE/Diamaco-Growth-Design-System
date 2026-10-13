"""Convert rendered PNG artboards to JPG exports. usage: python -I to_jpg.py <srcdir> <dstdir> id1 id2 ..."""
import sys, os
import cv2
src, dst, ids = sys.argv[1], sys.argv[2], sys.argv[3:]
os.makedirs(dst, exist_ok=True)
for i in ids:
    im = cv2.imread(os.path.join(src, 's-' + i + '.png'))
    out = os.path.join(dst, i + '.jpg')
    cv2.imwrite(out, im, [cv2.IMWRITE_JPEG_QUALITY, 90, cv2.IMWRITE_JPEG_PROGRESSIVE, 1])
    print(i, im.shape[1], 'x', im.shape[0], os.path.getsize(out) // 1024, 'KB')
