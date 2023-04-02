package config

import (
	"fmt"

	"github.com/spf13/viper"
)

type Config struct {
	GRPCServerPort string `mapstructure:"GRPC_SERVER_PORT"`
}

func NewConfig(path string) (*Config, error) {
	fmt.Println(path)
	viper.AddConfigPath(path)
	viper.SetConfigName(".env")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	config := &Config{}

	err := viper.ReadInConfig()
	if err != nil {
		if err, ok := err.(viper.ConfigFileNotFoundError); ok {
			// Config file not found; ignore error if desired
			fmt.Println(err)
			return config, err
		} else {
			panic(fmt.Errorf("fatal error config file: %w", err))
		}
	}

	// config := &Config{}

	err = viper.Unmarshal(config)
	return config, err
}
