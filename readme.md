# mongo validation example

## installation

```
sudo git clone git@github.com:owenallenaz/validation-example.git /some/path
cd /some/path
# will start temporary mongo and shell you into node container
sudo bash ./run.sh
# while in node container run to execute an example
npm start
# the src/ folder is mounted into the container so you can hot edit it to try different iterations without rebuilding
# alter the src/test.js I have prebaked a few example functions with different example errors
```