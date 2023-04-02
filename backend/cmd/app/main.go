package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"github.com/takeuchi-shogo/monorepo-example/backend/config"
	userpb "github.com/takeuchi-shogo/monorepo-example/backend/pkg/grpc"
	"google.golang.org/grpc"
)

type myServer struct {
	userpb.UnimplementedUsersServiceServer
}

func NewMyServer() *myServer {
	return &myServer{}
}

func (s *myServer) FindOneById(ctx context.Context, id *userpb.Id) (*userpb.User, error) {
	return &userpb.User{
		Id:   id.GetId(),
		Name: "test user name",
	}, nil
}

func main() {
	path := "."
	config, err := config.NewConfig(path)
	if err != nil {
		log.Fatal("cannot new config")
	}

	runGrpcServer(config)
}

func runGrpcServer(config *config.Config) {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%s", config.GRPCServerPort))
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()

	userpb.RegisterUsersServiceServer(s, NewMyServer())

	go func() {
		log.Printf("start gRPC server port: %v", config.GRPCServerPort)
		s.Serve(listener)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit

	log.Println(("stopping gRPC server..."))
	s.GracefulStop()
}
