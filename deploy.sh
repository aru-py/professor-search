ng build --prod
aws s3 sync dist/professors s3://professor-search --acl public-read --size-only
