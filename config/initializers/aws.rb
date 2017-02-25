CarrierWave.configure do |config|
  config.fog_credentials = {
      provider:              'AWS',                        # required
      aws_access_key_id:     'AKIAJHZYKRBNGLTSNTRQ',                        # required
      aws_secret_access_key: '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',                        # required
      region:                'ap-northeast-2',                  # optional, defaults to 'us-east-1'
      endpoint:              'https://s3.ap-northeast-2.amazonaws.com' # optional, defaults to nil
  }
  config.fog_directory  = 'oursgmarket'                          # required
end