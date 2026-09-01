import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

const cities = [
  { name: "Milano", score: 92 },
  { name: "Roma", score: 89 },
  { name: "Salerno", score: 87 },
  { name: "Bari", score: 78 },
  { name: "Torino", score: 69 },
];

export default function App() {
  const [search, setSearch] = React.useState("");

  const filtered = cities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={s.bg}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={s.logo}>ATLAS</Text>
        <Text style={s.sub}>Opportunity Intelligence</Text>

        <View style={s.card}>
          <Text style={s.score}>87</Text>
          <Text style={s.city}>Salerno</Text>
          <Text style={s.desc}>
            Opportunità molto alta per l'apertura di una nuova attività.
          </Text>
        </View>

        <Text style={s.title}>Top città</Text>

        <TextInput
          style={s.search}
          placeholder="Cerca una città..."
          placeholderTextColor="#7EA3FF"
          value={search}
          onChangeText={setSearch}
        />

        {filtered.map((item) => (
          <View key={item.name} style={s.item}>
            <View>
              <Text style={s.white}>{item.name}</Text>
              <Text style={s.small}>Opportunity Score</Text>
            </View>

            <Text style={s.itemScore}>{item.score}</Text>
          </View>
        ))}

        <View style={s.info}>
          <Text style={s.infoTitle}>Come funziona ATLAS</Text>

          <Text style={s.infoText}>
            • Analizza il potenziale economico di una città.
          </Text>
          <Text style={s.infoText}>
            • Valuta concorrenza e domanda.
          </Text>
          <Text style={s.infoText}>
            • Suggerisce le migliori opportunità di business.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#020D34",
    padding: 20,
  },

  logo: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "900",
  },

  sub: {
    color: "#3FD5FF",
    fontSize: 22,
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#19337A",
    borderRadius: 24,
    padding: 26,
    marginBottom: 24,
  },

  score: {
    color: "#fff",
    fontSize: 76,
    fontWeight: "900",
  },

  city: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 14,
  },

  desc: {
    color: "#AFC5FF",
    fontSize: 18,
    lineHeight: 28,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 14,
  },

  search: {
    backgroundColor: "#0D1D46",
    color: "white",
    borderRadius: 16,
    padding: 16,
    fontSize: 18,
    marginBottom: 18,
  },

  item: {
    backgroundColor: "#102766",
    borderRadius: 20,
    padding: 22,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  white: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  small: {
    color: "#7EA3FF",
    marginTop: 4,
  },

  itemScore: {
    color: "#3FD5FF",
    fontSize: 34,
    fontWeight: "900",
  },

  info: {
    backgroundColor: "#081A4A",
    borderRadius: 22,
    padding: 22,
    marginTop: 18,
    marginBottom: 40,
  },

  infoTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 14,
  },

  infoText: {
    color: "#B8C8FF",
    fontSize: 17,
    marginBottom: 10,
    lineHeight: 24,
  },
});
