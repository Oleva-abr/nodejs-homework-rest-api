module.exports.v2 = {
  config: () => {},
  uploader: {
    upload: (_path, _options, cb) => {
      cb(null, {
        public_id: 1234,
        secure_url: 'avatarUrl',
      });
    },
  },
};
