# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :phoenix_react_starter,
  ecto_repos: [PhoenixReactStarter.Repo]

# Configures the endpoint
config :phoenix_react_starter, PhoenixReactStarter.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "JQv3ak/ou6ycSszCj5fEuJ1+TJGLSmJ58HgmoaDF5Dw5Db38X9yHUQTXC9lHItkU",
  render_errors: [view: PhoenixReactStarter.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhoenixReactStarter.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
