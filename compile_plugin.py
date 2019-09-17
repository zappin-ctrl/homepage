import time
import os

from zipfile import ZipFile

timestamp = int(time.time())
zip_folder = ZipFile("plugin_{}.zip".format(timestamp), "w")

# /assets
for folderName, subfolders, filenames in os.walk("assets"):
    for filename in filenames:
        filePath = os.path.join(folderName, filename)
        zip_folder.write(filePath)

# Single files
include_files = ["indexPlugin.html", "manifest.json"]
for g in include_files:
    zip_folder.write(g)


zip_folder.close()
