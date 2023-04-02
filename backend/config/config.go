package config

import "github.com/spf13/viper"

type Config struct {
	GRPCServerPort string `mapstructure:"GRPC_SERVER_PORT"`
}

func NewConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
