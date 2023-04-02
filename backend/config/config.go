package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	GRPCServerPort string `mapstructure:"GRPC_SERVER_PORT"`
}

func NewConfig(path string) (*Config, error) {
	viper.AddConfigPath(path)
	// viper.SetConfigName("app")
	viper.SetConfigType(".env")

	viper.AutomaticEnv()

	config := &Config{}

	err := viper.ReadInConfig()
	if err != nil {
		log.Println(err)
		return config, err
	}

	// config := &Config{}

	err = viper.Unmarshal(config)
	return config, err
}
